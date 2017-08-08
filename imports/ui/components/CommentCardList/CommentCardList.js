import React from 'react';

import CommentCard from '../CommentCard/';

const CommentCardList = ({forms}) => (
    <div>
        {forms.map((form) =>
            <CommentCard 
                key={form._id}
                form={form}
            />
        )}

    </div>
);

export default CommentCardList;
