export const steps = [
  { id: 1, title: "Company Details" },
  { id: 2, title: "Business Activity" },
  { id: 3, title: "Directors" },
  { id: 4, title: "Referrals" },
  { id: 5, title: "Bank Details" },
  { id: 6, title: "Documents" },
  { id: 7, title: "Products" },
];

type HeadingsType = {
  id: number;
  title: string | React.ReactElement;
  description: string;
};
export const headings: HeadingsType[] = [
  {
    id: 1,
    title: "Enter your Organization Details",
    description: "Enter accurate details to verify your company.",
  },
  {
    id: 2,
    title: "Enter your Business Activity Details",
    description: "Enter business activity details to verify your company.",
  },

  {
    id: 3,
    title: "Enter your Directors Details",
    description: "Enter accurate details to verify your company.",
  },
  {
    id: 4,
    title: "Enter your Trade References Details",
    description: "Enter accurate details to verify your company.",
  },
  {
    id: 5,
    title: "Enter your Bank Details",
    description: "Enter accurate details to verify your company.",
  },
  {
    id: 6,
    title: "Upload your Documents",
    description: "Upload Valid Documents to verify your company ",
  },
  {
    id: 7,
    title: (
      <span>
        Enter your Products -{" "}
        <span className="text-[#FF811A] text-[22px]"> (Optional)</span>
      </span>
    ),
    description: "Add product details now or skip for later.",
  },
];
export const companyType = [
  { label: "Company", value: "Company" },
  { label: "Company 1", value: "Company 1" },
  { label: "Company 2", value: "Company 2" },
];
export enum CompanyTypeEnum {
  LLC = "LLC",
  SOLE_PROPRIETORSHIP = "SOLE_PROPRIETORSHIP",
  JOINT_VENTURE = "JOINT_VENTURE",
  BRANCH_FOREIGN_COMPANY = "BRANCH_FOREIGN_COMPANY",
  REPRESENTATIVE_OFFICE = "REPRESENTATIVE_OFFICE",
  PJSC = "PJSC",
  PRJSC = "PRJSC",
  LIMITED_PARTNERSHIP = "LIMITED_PARTNERSHIP",
  FZC = "FZC",
  FZE = "FZE",
  OFFSHORE = "OFFSHORE",
  HOLDING = "HOLDING",
  COOPERATIVE_SOCIETY = "COOPERATIVE_SOCIETY",
  NPO_NGO = "NPO_NGO",
  GOV_ENTITY = "GOV_ENTITY",
  SPC = "SPC",
  CIVIL_COMPANY = "CIVIL_COMPANY",
}

export const CompanyTypeLabelMap: Record<CompanyTypeEnum, string> = {
  [CompanyTypeEnum.LLC]: "LLC – Limited Liability Company",
  [CompanyTypeEnum.SOLE_PROPRIETORSHIP]: "Sole Proprietorship (Establishment)",
  [CompanyTypeEnum.JOINT_VENTURE]: "Joint Venture",
  [CompanyTypeEnum.BRANCH_FOREIGN_COMPANY]: "Branch of a Foreign Company",
  [CompanyTypeEnum.REPRESENTATIVE_OFFICE]: "Representative Office",
  [CompanyTypeEnum.PJSC]: "Public Joint Stock Company (PJSC)",
  [CompanyTypeEnum.PRJSC]: "Private Joint Stock Company (PrJSC)",
  [CompanyTypeEnum.LIMITED_PARTNERSHIP]: "Limited Partnership",
  [CompanyTypeEnum.FZC]: "Free Zone Company (FZC)",
  [CompanyTypeEnum.FZE]: "Free Zone Establishment (FZE)",
  [CompanyTypeEnum.OFFSHORE]: "Offshore Company",
  [CompanyTypeEnum.HOLDING]: "Holding Company",
  [CompanyTypeEnum.COOPERATIVE_SOCIETY]: "Cooperative Society",
  [CompanyTypeEnum.NPO_NGO]: "Non-Profit Organization (NPO/NGO)",
  [CompanyTypeEnum.GOV_ENTITY]: "Government Entity / Semi-Government Entity",
  [CompanyTypeEnum.SPC]: "Single Person Company (SPC)",
  [CompanyTypeEnum.CIVIL_COMPANY]: "Civil Company (Professional Services)",
};
export const getCompanyTypeOptions = () => {
  return Object.entries(CompanyTypeLabelMap).map(([value, label]) => ({
    value,
    label,
  }));
};
