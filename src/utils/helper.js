export const redirectPath = (path, props) => {
	const { history } = props;
	history.push(`${path}`);
};