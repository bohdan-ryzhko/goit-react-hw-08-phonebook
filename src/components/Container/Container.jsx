import sass from "./Container.module.scss";

export const Container = ({ children }) => (
	<div className={sass.container}>{children}</div>
)
