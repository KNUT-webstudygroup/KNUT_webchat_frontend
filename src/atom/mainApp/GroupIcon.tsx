import {GroupInfo} from "../../types/types"

const GroupIcon = (p:{server:GroupInfo}) => {
	const server_ = p.server;
	return(
		<div>
			<img src={server_.imagelink}/>
			<div>
				{server_.name}
			</div>
		</div>
	)
}

export default GroupIcon