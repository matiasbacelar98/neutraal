import { StepText } from '@ui';

export default function StepsIndicator() {
  return (
    <article className="w-full max-w-[362px] flex justify-between items-center">
      <StepCircle stepName="Details" completed />
      <ProgressLine completed={false} />
      <StepCircle stepName="Plan" completed={false} />
      <ProgressLine completed={false} />
      <StepCircle stepName="Confirm" completed={false} />
    </article>
  );
}

//------------ Components ------------//
type ProgressLineProps = {
  completed: boolean;
};

function ProgressLine({ completed }: ProgressLineProps) {
  const lineWidth = completed ? 'w-full' : 'w-[0px]';

  return (
    <div className="bg-gray-light h-[2px] w-full relative">
      <span
        className={`bg-primary h-[2px] ${lineWidth} absolute top-1/2 left-0 transform -translate-y-1/2 z-10`}
      />
    </div>
  );
}

type StepCircleProps = {
  stepName: string;
  completed: boolean;
};

function StepCircle({ stepName, completed }: StepCircleProps) {
  const bgOuterCircle = `
    w-9 h-9 flex-shrink-0
    ${completed ? 'bg-primary' : 'bg-transparent'}
    ${!completed ? 'border-2 border-gray-light' : ''}
    rounded-full relative`;

  const bgInnerCirle = `
    w-2 h-2 rounded-full
    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    ${completed ? 'bg-bg' : 'bg-gray-light'}
  `;

  const textWrapper = 'absolute bottom-[-36px] left-1/2 transform -translate-x-1/2';

  return (
    <div className={bgOuterCircle}>
      <span className={bgInnerCirle} />
      <div className={textWrapper}>
        <StepText color={completed ? 'text-primary' : 'text-gray-light'}>{stepName}</StepText>
      </div>
    </div>
  );
}
