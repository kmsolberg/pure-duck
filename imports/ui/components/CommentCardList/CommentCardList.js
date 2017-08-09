import React from 'react';

import CommentCard from '../CommentCard/';

const CommentCardList = ({forms}) => (
    <ul>
        {forms.map((form) =>
            <CommentCard 
                key={form._id}
                form={form}
            />
        )}

    </ul>
);

export default CommentCardList;
