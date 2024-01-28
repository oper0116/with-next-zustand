import { useCounterStore } from "~/stores/client/couter/user-counter-store";

export default function Counter() {
	const { count, inc } = useCounterStore();

	return (
		<div>
			<h2>Counter Store</h2>
			<h4>{count}</h4>
			<button onClick={inc}>One Up</button>
		</div>
	);
}
