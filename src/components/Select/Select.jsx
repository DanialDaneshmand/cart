import Select from "react-select";

const SelectComp = ({ ...rest }) => {
  return (
    <div style={{ marginRight: "5px" }}>
      <Select {...rest} />
    </div>
  );
};

export default SelectComp;
