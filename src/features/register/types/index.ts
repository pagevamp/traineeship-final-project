import {
  Control,
  FieldErrors,
  SubmitHandler,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
  UseFormWatch,
} from "react-hook-form";
export interface CustomerRegisterProps {
  register: UseFormRegister<UserPayload>;
  watch: UseFormWatch<UserPayload>;
  setValue: UseFormSetValue<UserPayload>;
  trigger: UseFormTrigger<UserPayload>;
  errors: FieldErrors<UserPayload>;
  handleSubmit: (
    onSubmit: SubmitHandler<UserPayload>
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  onSubmit: SubmitHandler<UserPayload>;
  control: Control<UserPayload>;
}
export interface UserPayload {
  user: {
    id: string;
  };
  products: Product[];
  creditAccountNumber: string;
  companyName: string;
  companyEmail: string;
  companyType: string;
  yearOfEstablishment: string;
  employeeSize: number;
  natureOfBusiness: string;
  shipmentType: string;
  typeOfTruck: string;
  destinationCountry: string;
  directorDetails?: Director[];
  financialDirectorDetails?: Director[];
  tradeReferenceDetails?: TradeReference[];
  bankDetails: BankDetail[];
  documents: Document[];
  userId: string;
}

export interface Product {
  createdBy: {
    id: string;
  };
  hsCode: string;
  commodityName: string;
}

export interface Director {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface TradeReference {
  id: string;
  referenceName: string;
  businessAssociation: string;
  phone: string;
  email: string;
}

export interface BankDetail {
  id: string;
  accountHolderName: string;
  bankName: string;
  bankBranchNameAndLocation: string;
  accountNumber: string;
  iban: string;
  swiftBicCode: string;
  currency: string;
  bankCountry: string;
  beneficiaryAddress: string;
  bankAddress: string;
  vatTrnNumber: string;
  referenceFromBank: string;
  uploadCancelledCheque: string;
}

export interface Document {
  id: string;
  tradeLicense: string;
  vatCertificate: string;
  passport: string;
  emiratesId: string;
  secuirtyCheck: string;
  contract: string;
  other: string;
}
