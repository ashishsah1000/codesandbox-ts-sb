export type FlightBooking = {
  from: {
    code?: string;
    name?: string;
    date?: Date;
  };
  to: {
    code?: string;
    name?: string;
    date?: Date;
  };
  airline?: string;
  flight?: string;
  bookingClass?: string;
  status?: string;
};
export type PNR = {
  pnrNo?: string;
  name?: string;
  email?: string;
  passengers?: number;
  mail?: boolean;
  print?: boolean;
  bookings?: [string];
  className?: string;
  others?: void;
};
