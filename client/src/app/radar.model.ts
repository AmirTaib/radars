
export interface Icon {
    _iconId: number;
    _iconName: string;
}

export interface EntityType {
    Icon: Icon;
    _entityTypeId: number;
    _iconId: number;
    _name: string;
}

export interface Radar {
    EntityTypes: EntityType[];
    _groupId: number;
    _name: string;
    _systemId: number;
    _visible: boolean;
}


