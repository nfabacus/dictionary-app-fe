import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  memo,
  useMemo,
  Fragment,
} from "react";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import wordDictionaryObj from "../../words_dictionary.json";
import { convertListToIndexObject, filterWordsBySearchTerm } from "../../utils";
import DictListItemText from "./ListText";
import DictListItem from "./DictListItem";
const list = Object.keys(wordDictionaryObj);
const indexedListObj = convertListToIndexObject(list);

interface DictionaryProps {
  searchTerm: string;
}

function DictionaryList({ searchTerm }: DictionaryProps) {
  const filteredWords = useMemo(() => {
    const firstChar = searchTerm.charAt(0);
    const targetWordsArr: string[] = indexedListObj[firstChar] || list; // if indexList exist with the first character of the search term then use it. Otherwise, use the whole list.
    return filterWordsBySearchTerm(searchTerm, targetWordsArr);
  }, [searchTerm]);

  const [visibleList, setVisibleList] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const hasMore =
    filteredWords.length > visibleList.length &&
    filteredWords.length > pageSize;

  const noResult = !!searchTerm && visibleList.length === 0;

  const listViewRef = useRef<HTMLElement>();

  const observer = useRef<IntersectionObserver | null>();
  const lastWordRef = useCallback(
    (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  useEffect(() => {
    setPage(1);
  }, [filteredWords]);

  useEffect(() => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentPageWords = filteredWords.slice(startIndex, endIndex);

    if (page === 1) {
      if (listViewRef.current) {
        listViewRef.current.scrollTop = 0;
      }
      setVisibleList(currentPageWords);
    } else {
      setVisibleList((prevList: string[]) => [
        ...prevList,
        ...currentPageWords,
      ]);
    }
  }, [page, filteredWords]);

  if (noResult) {
    return (
      <Box className="w-full">
        <Typography component="p" variant="h4" className="mb-6" align="center">
          No result found
        </Typography>
      </Box>
    );
  }

  const listWrapperClassName =
    "bg-white w-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 overflow-auto mb-8 border border-gray-300 rounded-md shadow-lg";

  return (
    <Box
      data-testid="ListBox"
      className={listWrapperClassName}
      ref={listViewRef}
    >
      <List>
        {visibleList.map((word, i) => {
          const isLastWord = i + 1 === visibleList.length;
          if (isLastWord) {
            return (
              <Fragment key={i}>
                <DictListItem
                  className="lastWord"
                  label={`${i + 1}`}
                  text={word}
                  ref={lastWordRef}
                />
                {hasMore && (
                  <DictListItemText
                    text="Loading more..."
                    align="center"
                    className="p-6"
                  />
                )}
              </Fragment>
            );
          } else {
            return <DictListItem key={i} label={`${i + 1}`} text={word} />;
          }
        })}
      </List>
    </Box>
  );
}

export default memo(DictionaryList);
