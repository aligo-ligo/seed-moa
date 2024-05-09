type shareLinkParams = ShareData & Pick<Required<ShareData>, 'url'>;

const copyClipboard = async ({ url }: shareLinkParams) => {
  await navigator.clipboard.writeText(url);
};

export const shareLink = async ({ url, ...params }: shareLinkParams) => {
  if (!navigator.canShare) {
    copyClipboard({ url });
    return;
  }

  await navigator.share({ url, ...params });
};
