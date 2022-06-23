
export function requireImg(path) {
    path = parseImagePath(path);
    if (window.IS_VITE) {
        return require(path);
    }
    return require('@assets/' + path)

}

export function parseImagePath(path) {
    if (window.IS_VITE) {
        path = path.replaceAll("../", '');
        path = path.replace('@', '')
        path = "src/" + path;
    } else {
        path = path.replaceAll("../", '');
        path = path.replace("@assets/", '')
        path = path.replace("assets/", '')

    }
    return path;
}
