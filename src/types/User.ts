interface IGeoData {
  lat: string;
  lng: string;
}

interface IAddressData {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeoData;
}

interface ICompanyData {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddressData;
  phone: string;
  website: string;
  company: ICompanyData;
}
