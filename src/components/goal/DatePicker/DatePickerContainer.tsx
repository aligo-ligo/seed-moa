import { ReactNode } from 'react';
import { CalendarContainer } from 'react-datepicker';

type DatePickerProps = {
  className: string;
  children: ReactNode;
};

const DatePickerContainer = ({ className, children }: DatePickerProps) => {
  return (
    <div style={{}}>
      <CalendarContainer className={className}>
        <div style={{ position: 'relative' }}>{children}</div>
      </CalendarContainer>
    </div>
  );
};

export default DatePickerContainer;
