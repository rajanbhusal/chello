import { useSwipeable } from "react-swipeable";

const useCustomSwipeable = (containerRef) => {
    const scroll = (scrollOffset) => {
        containerRef.current.scrollLeft += scrollOffset;
    }
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => scroll(300),
        onSwipedRight: () => scroll(-300)
    })
    return [swipeHandlers,scroll];
}

export default useCustomSwipeable;