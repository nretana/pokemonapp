
export const getLastSegmentPath = (url: string) => {
     const pathName = new URL(url).pathname;
     const paths = pathName.split('/').filter(segment => segment !== '');
     return paths[paths.length - 1];
}