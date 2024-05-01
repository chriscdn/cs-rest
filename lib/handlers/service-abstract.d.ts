import type Session from "../Session";
declare class ServiceAbstract {
    protected _session: Session;
    constructor(session: Session);
    get session(): Session;
}
export default ServiceAbstract;
