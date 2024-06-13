export interface Subscription {
    id: number;
    idUser: number;
    package: Package;
    packageDetailResponse: PackageDetailResponse;
    creationDate: string;
    observation: string;
    status: number;
    discountPriceUpgrade: number;
    payment: any;  
    statusName: string;
    schedule: any;  
    datePendingFee: string | null;
    pendingFee: number;
    descriptionPendingFee: string | null;
    lastDatePaidFee: string | null;
    quotaDescription: string;
    scoreActiveCompuesto: number;
    scoreActiveResidual: number;
    nextExpiration: string | null;
    allowGracePeriod: boolean;
    countSuscriptionByFamily: number;
    typeShares: string;
    codeComany: string;
    beneficiaries: string;
    numberGuests: number;
}

export interface Package {
    id: number;
    name: string;
    codeMembership: string;
    description: string;
    idFamilyPackage: number;
    estatus: number;
    legalDocuments: any;  
    listPackageDetails: any[] | null;  
}

export interface PackageDetailResponse {
    numberSharesLetters: string;
    idPackageDetail: number;
    price: number;
    numberQuotas: number;
    initialPrice: number;
    quotaPrice: number;
    priceLetters: string;
    namePackage: string;
    nameFamilyPackage: string;
    familyPackageId: number;
    membershipVersionId: number;
    numberShares: number;
    membershipmaintenance: number;
    membershipmaintenanceletter: string;
    volume: number;
    desiredAmount: number;
    desiredAmountletter: string;
}
