interface Parameters<Props, Propless> {
  base: string,
  variants: Propless extends null ? Partial<{ [Key in keyof Props]: Props[Key] extends string ? Partial<{ [Value in Props[Key]]: string }> : string }> : Propless,
  compounds: Array<[Partial<Propless extends null ? Props : { [Key in keyof Propless]: Propless[Key] extends object ? keyof Propless[Key] : boolean }>, string]>
}

const stitchtail = <Props = null, Propless = null>({ base, variants, compounds }: Parameters<Props, Propless>) => {
	return (props?: Partial<Propless extends null ? Props : { [Key in keyof Propless]: Propless[Key] extends object ? keyof Propless[Key] : boolean }>) => {
		const classes = [...base.split(" ")];

		if (props) {
			Object.entries(props).forEach(([key, value]) => {
				if (variants[key as keyof typeof variants] && value) {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					classes.push(...((typeof variants[key as keyof typeof variants] === "string" ? variants[key as keyof typeof variants] : variants[key as keyof typeof variants][value]) as string).split(" "));
				}
			});

			for (let i = 0; i < compounds.length; i++) {
				const entries = Object.entries(compounds[i][0]);
				let matches = 0;

				entries.forEach(([key, value]) => {
					props[key as keyof typeof props] === value && matches++;
				});

				if (entries.length === matches) {
					classes.push(...compounds[i][1].split(" "));
				}
			}
		}

		return classes.filter(value => value.length > 0).join(" ").trim();
	};
};

export { stitchtail as default, stitchtail };