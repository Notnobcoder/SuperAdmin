export type UserDetailsD = {
    _id:                    string;
    storeId:                string;
    storeNumber:            string;
    email:                  string;
    mobileNumber:           string;
    name:                   string;
    storeType:              string;
    role:                   string;
    Associate:              any[];
    Associated:             any[];
    personalProfileStatus:  boolean;
    businessProfileStatus:  boolean;
    profilePhotoStatus:     boolean;
    profileSignatureStatus: boolean;
    profileFactoryStatus:   boolean;
    createdAt:              string;
    updatedAt:              string;
    __v:                    number;
}