import React, { useState } from 'react';

interface Comment {
    id: string;
    author: string;
    text: string;
    createdAt: Date;
    replies?: Comment[];
}

const CommentThread: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([
        {
            id: '1',
            author: 'John Doe',
            text: 'Great movie! I really enjoyed it.',
            createdAt: new Date('2023-05-01T10:00:00'),
            replies: [
                {
                    id: '2',
                    author: 'Jane Smith',
                    text: 'I agree, the acting was superb.',
                    createdAt: new Date('2023-05-01T11:00:00'),
                    replies: [
                        {
                            id: '3',
                            author: 'Bob Johnson',
                            text: 'The cinematography was also excellent.',
                            createdAt: new Date('2023-05-01T12:00:00'),
                        },
                    ],
                },
            ],
        },
        {
            id: '4',
            author: 'Alice Williams',
            text: 'I found the plot a bit confusing at times.',
            createdAt: new Date('2023-05-01T13:00:00'),
        },
    ]);
    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newComment.trim()) {
            const comment: Comment = {
                id: Date.now().toString(),
                author: 'User', // Replace with actual user information
                text: newComment.trim(),
                createdAt: new Date(),
            };
            setComments([...comments, comment]);
            setNewComment('');
        }
    };

    const renderComments = (comments: Comment[]) => (
        <div>
            {comments.map((comment) => (
                <div key={comment.id} className="mb-4">
                    <div className="flex items-center">
                        <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                            <span className="text-gray-600 font-semibold">
                                {comment.author.charAt(0).toUpperCase()}
                            </span>
                        </div>
                        <span className="font-semibold">{comment.author}</span>
                        <span className="text-gray-500 ml-2">
                            {comment.createdAt.toLocaleString()}
                        </span>
                    </div>
                    <p className="text-gray-700">{comment.text}</p>
                    {comment.replies && (
                        <div className="ml-8 mt-4">
                            {renderComments(comment.replies)}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

    return (
        <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Comments</h3>
            <form className="mb-4" onSubmit={handleCommentSubmit}>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="w-full border border-gray-300 rounded-md p-2"
                    rows={3}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
                >
                    Submit
                </button>
            </form>
            <div>{renderComments(comments)}</div>

        </div>
    );
};

export default CommentThread;
