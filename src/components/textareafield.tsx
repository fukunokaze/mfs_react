interface TextAreaFieldProps {
  label: string;
  name: string;
  defaultValue: string;
  elementId?: string;
  elementName?: string;
  placeholder?: string;
  hidden?: boolean;
  rows?: number;
}

function TextAreaField(props: TextAreaFieldProps) {
  return (
    <div className="mb-3 row align-items-center">
      <label className="col-4 text-start pe-3" htmlFor={props.elementId}>
        {props.label}:
      </label>
      <div className="col-8">
        <textarea
          id={props.elementId}
          name={props.elementName}
          defaultValue={props.defaultValue}
          hidden={props.hidden}
          rows={props.rows}
          cols={50}
        />
      </div>
    </div>
  );
}

export default TextAreaField;
