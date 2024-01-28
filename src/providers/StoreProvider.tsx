import { type PropsWithChildren, useRef } from "react";
import type { StoreType } from "../stores";
import { initializeStore, Provider } from "../stores";

const StoreProvider = ({ children, ...props }: PropsWithChildren) => {
	const storeRef = useRef<StoreType>();

	if (!storeRef.current) {
		storeRef.current = initializeStore(props);
	}

	return <Provider value={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
