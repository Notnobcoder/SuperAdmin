export type GetStoresD = {
    _id:              string;
    storeNumber:      string;
    email:            string;
    mobileNumber:     string;
    name:             string;
    flag:             boolean;
    totalLike:        number;
    averageRating:    string;
    totalReviews:     number;
    notAssociated:    number[];
    Associated:       number[];
    storeType:        string;
    storeHeading:     string;
    storeDescription: string;
    storeImage:       null;
    delivery:         string;
    userLikes:        UserLikeD[];
    createdAt:        string;
    updatedAt:        string;
    __v:              number;
    userRatings:      any[];
}

export type UserLikeD = {
    userId: string;
    name:   string;
    email:  string;
    _id:    string;
}