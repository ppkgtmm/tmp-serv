export function removeProps(obj: object, props: Array<string>): object {
    props.forEach(prop => {
        if (prop in obj) delete obj[prop];
    });
    return obj
}