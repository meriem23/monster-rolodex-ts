import "./search-box.styles.css";
import { ChangeEventHandler, ChangeEvent } from "react";
//TYPES FOR FUNCTIONS
const func: (a: string, b: number) => boolean = (a, b) => {
  return true;
};

//INTERFACE FOR OBJECTS
interface ISearchBoxProps extends IChangeHandlerProps {
  className: string;
  placeholder: string;
}

interface IChangeHandlerProps {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  // isChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  //they are the same , the second one is the first one written explicitly
}

type SearchBoxProps = {
  className: string;
  placeholder: string;
  onChangeHandler: () => void;
};
//TYPE FOR OBJECTD
type CanadianAddress = {
  street: string;
  province: string;
};

type USAddress = {
  street: string;
  state: string;
};

type NorthAmericanAddress = CanadianAddress | USAddress;
const Address: NorthAmericanAddress = {
  street: "",
  state: "",
  province: "",
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: ISearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={(e) => onChangeHandler(e)}
  />
);

export default SearchBox;
