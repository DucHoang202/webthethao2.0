'use client';

import * as Dialog from '@radix-ui/react-dialog';
import ShareTooltip from './ShareTooltip';

const ShareModal = ({ title }: { title?: string }) => {
    return (
        <Dialog.Root>
            {/* Nút mở modal */}
            <Dialog.Trigger asChild>
                <button className="share-btn">
                    Chia sẻ
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
                {/* Overlay – click ra ngoài tự đóng */}
                <Dialog.Overlay
                    className="fixed inset-0 bg-black/40 z-40"
                />

                {/* Modal content */}
                <Dialog.Content
                    className="
            fixed z-50
            top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            bg-white rounded-xl p-4
            w-[320px]
            focus:outline-none
          "
                >
                    <ShareTooltip title={title} />

                    {/* Close button (optional) */}
                    <Dialog.Close
                        className="absolute top-2 right-2 text-xl"
                    >
                        ✕
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default ShareModal;
