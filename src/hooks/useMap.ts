import { useCallback, useState } from "react";

export type MapOrEntries<K, V> = Map<K, V> | [key: K, value: V][];

// Public interface
export interface Actions<K, V> {
	set: (key: K, value: V) => void;
	setAll: (entries: MapOrEntries<K, V>) => void;
}

// We hide some setters from the returned map to disable autocompletion
type Return<K, V> = [
	Omit<Map<K, V>, "set" | "clear" | "delete">,
	Actions<K, V>
];

export function useMap<K, V>(
	initialState: MapOrEntries<K, V> = new Map()
): Return<K, V> {
	const [map, setMap] = useState(new Map(initialState));

	const actions: Actions<K, V> = {
		set: useCallback((key, value) => {
			setMap((prev) => {
				const copy = new Map(prev);
				copy.set(key, value);
				return copy;
			});
		}, []),

		setAll: useCallback((entries) => {
			setMap(() => new Map(entries));
		}, []),
	};

	return [map, actions];
}
