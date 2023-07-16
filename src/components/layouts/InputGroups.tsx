import React from 'react';

type InputGroupProps = {
  children: React.ReactNode[];
};

export function InputGroup(props: InputGroupProps) {
  const { children } = props;
  const labelChildren = props.children[0];
  const inputAndErrorChildren = children.slice(1);

  return (
    <div className="w-full space-y-1">
      {labelChildren}
      <div className="space-y-3">{inputAndErrorChildren}</div>
    </div>
  );
}

export function CheckboxGroup(props: InputGroupProps) {
  const { children } = props;

  const inputAndLabelChildren = children.slice(0, 2);
  const errorChildren = props.children[2];

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center space-x-3">{inputAndLabelChildren}</div>
      {errorChildren}
    </div>
  );
}
