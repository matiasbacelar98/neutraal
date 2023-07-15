import { Fragment } from 'react';

type SelectOptionProps = {
  content: string;
  id: string;
  value: string;
};

type SelectProps = {
  id: string;
  options: SelectOptionProps[];
  defaultOpt: string;
  value: string;
  onChange: () => void;
};

export default function Select(props: SelectProps) {
  const { id, options, defaultOpt, value, onChange } = props;

  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="
      w-full h-10 pl-2 pr-8 font-book text-text bg-bg text-base
      border-2 border-gray-light rounded transition duration-300
    focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
    >
      <option value="">{defaultOpt}</option>
      <OptionsList list={options} />
    </select>
  );
}

type OptionsListProp = {
  list: SelectOptionProps[];
};

function OptionsList(props: OptionsListProp) {
  const { list } = props;

  return (
    <Fragment>
      {list.map(opt => (
        <option value={opt.value} key={opt.id}>
          {opt.content}
        </option>
      ))}
    </Fragment>
  );
}
