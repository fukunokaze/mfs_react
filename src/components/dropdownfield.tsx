interface DropDownFieldProps {
  label: string;
  defaultValue: string;
  elementId?: string;
  elementName?: string;
  hidden?: boolean;
  values?: Array<{ value: string; text: string }>;
}

function DropDownField(props: DropDownFieldProps) {
  return (
    <div className="mb-3 row align-items-center">
      <label className="col-4 text-start pe-3" htmlFor={props.elementId}>
        {props.label}:
      </label>
      <div className="col-8">
        <select
          id={props.elementId}
          name={props.elementName}
          className="form-select"
          defaultValue={props.defaultValue}
        >
          {props.values?.map((option) => (
            <option  key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DropDownField;
