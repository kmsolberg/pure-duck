import React from 'react';

import ReviewCard from '../ReviewCard/';

const ReviewCardList = ({forms}) => (
    <ul className="review-cards">
        {forms.map((form) =>
            <ReviewCard
                key={form._id}
                form={form}
            />
        )}
    </ul>
);

export default ReviewCardList;
