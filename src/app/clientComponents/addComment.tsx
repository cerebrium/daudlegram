"use client";

import { addComment } from "@/actions/addComment";
import { usePathname } from "next/navigation";
import { useActionState, useEffect, useRef, useState } from "react";

export type AddCommentProps = {
  postId: string;
  onClose: () => void;
};

type CommentState = {
  success: boolean;
  error?: string;
  message?: string;
};

const AddComment: React.FC<AddCommentProps> = ({ postId, onClose }) => {
  const pathName = usePathname();
  const formRef = useRef<HTMLFormElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  const initialState: CommentState = {
    success: false,
  };

  const [state, formAction, pending] = useActionState(addComment, initialState);

  // Handle successful submission
  useEffect(() => {
    if (state?.success && !pending) {
      setIsClosing(true);
      // Close the form after showing success animation
      const timeout = setTimeout(() => {
        formRef.current?.reset();
        onClose();
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [state, pending, onClose]);

  // Auto-resize textarea
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  // Focus textarea when component mounts
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div
        className={`card w-full max-w-md bg-base-100 shadow-2xl transition-all duration-300 ${isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}
      >
        <div className="card-body">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="card-title text-lg font-semibold">Add Comment</h3>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-ghost btn-sm btn-circle"
              disabled={pending}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Form */}
          <form ref={formRef} action={formAction} className="space-y-4">
            {/* Textarea */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  Share your thoughts
                </span>
              </label>
              <textarea
                ref={textareaRef}
                name="content"
                className="textarea textarea-bordered min-h-[100px] resize-none focus:textarea-primary transition-colors"
                placeholder="Write your comment here..."
                required
                disabled={pending || isClosing}
                onChange={handleTextareaChange}
                maxLength={500}
              />
              <label className="label">
                <span className="label-text-alt text-xs opacity-60">
                  Be respectful and constructive
                </span>
              </label>
            </div>

            {/* Hidden fields */}
            <input type="hidden" name="postId" value={postId} />
            <input type="hidden" name="path" value={pathName} />

            {/* Error Display */}
            {state?.error && !pending && (
              <div className="alert alert-error shadow-sm">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">{state.error}</span>
              </div>
            )}

            {/* Success Display */}
            {state?.success && !pending && (
              <div className="alert alert-success shadow-sm">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">
                  {state.message || "Comment added successfully!"}
                </span>
              </div>
            )}

            {/* Actions */}
            <div className="card-actions justify-end pt-2">
              <button
                type="button"
                onClick={onClose}
                className="btn btn-ghost"
                disabled={pending || isClosing}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={pending || isClosing}
              >
                {pending ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Posting...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    Post Comment
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddComment;
