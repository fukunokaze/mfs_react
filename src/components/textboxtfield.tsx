import Link from "next/link";

interface TextBoxFieldProps {
  label: string;
  defaultValue: string;
  elementId?: string;
  elementName?: string;
  placeholder?: string;
  hidden?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loookupEvent?: () => void;
}

function TextBoxField(props: TextBoxFieldProps) {
  return (
    <div className="mb-3 row align-items-center" hidden={props.hidden}>
      <label className="col-4 text-start pe-3" htmlFor={props.elementId}>
        {props.label}:
      </label>
      <div className="col-8 text-nowrap">
        <input
          type="text"
          id={props.elementId}
          name={props.elementName}
          disabled={props.disabled}
          placeholder={props.placeholder}
          className="form-control"
          value={props.value}
        />
        {props.loookupEvent && (
          <Link href="#" onClick={props.loookupEvent}>
            Lookup
          </Link>
        )}
      </div>
    </div>
  );
}

export default TextBoxField;
