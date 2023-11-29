export default function loadBalancer(chinaDownload, USDownload) {
  const promises = Promise.race([chinaDownload, USDownload]);
  return promises
    .then((res) => res.value);
}
