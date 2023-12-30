function defaultComposeFunc(x: number, y: number) {
    return `translate3d(${x}px, ${y}px, 0)`;
}

const fixedElement = (scrollbar: any, target: any, options: any) => {
    const pinOptions = {
        compose: defaultComposeFunc,
        ...options,
    };

    // adjust positioning
    target.style.position = 'absolute';

    const pinElement = () => {
        const { top, bottom, left, right, compose } = pinOptions;
        const { offset, limit } = scrollbar;
        let x = 0;
        let y = 0;

        if (top !== undefined) {
            y = offset.y + top;
            target.style.top = '0px';
        } else if (bottom !== undefined) {
            y = offset.y - limit.y - bottom;
            target.style.bottom = '0px';
        }

        if (left !== undefined) {
            x = offset.x + left;
            target.style.left = '0px';
        } else if (right !== undefined) {
            x = offset.x - limit.x - right;
            target.style.right = '0px';
        }

        target.style.transform = compose(x, y);
    }

    scrollbar.addListener(pinElement);
    scrollbar.update(); // force an update
    pinElement();

    return {
        setOption(opt = {}) {
            Object.assign(pinOptions, opt);
        },
        flush() {
            pinElement();
        },
        unpin() {
            scrollbar.removeListener(pinElement);
        },
    };
}

export default fixedElement;