
export interface ShowAvatarInfoList {
        avatarId: number;
        level: number;
        costumeId?: number;
    }

export interface ProfilePicture {
        avatarId: number;
    }

export interface PlayerInfo {
        nickname: string;
        level: number;
        signature: string;
        worldLevel: number;
        nameCardId: number;
        finishAchievementNum: number;
        towerFloorIndex: number;
        towerLevelIndex: number;
        showAvatarInfoList: ShowAvatarInfoList[];
        showNameCardIdList: number[];
        profilePicture: ProfilePicture;
    }


export interface PropMap {
        [x:number]:number
    }

export interface FightPropMap {
    [x:number]:number
    }

export interface SkillLevelMap {
    [x:number]:number
}

export interface Reliquary {
        level: number;
        mainPropId: number;
        appendPropIdList: number[];
    }

export interface ReliquaryMainstat {
        mainPropId: string;
        statValue: number;
    }

export interface ReliquarySubstat {
        appendPropId: string;
        statValue: number;
    }

export interface WeaponStat {
        appendPropId: string;
        statValue: number;
    }

export interface Flat {
        nameTextMapHash: string;
        setNameTextMapHash: string;
        rankLevel: number;
        reliquaryMainstat: ReliquaryMainstat;
        reliquarySubstats: ReliquarySubstat[];
        itemType: string;
        icon: string;
        equipType: string;
        weaponStats: WeaponStat[];
    }

export interface AffixMap {
    [x:number]:number

    }

export interface Weapon {
        level: number;
        promoteLevel: number;
        affixMap: AffixMap;
    }

export interface EquipList {
        itemId: number;
        reliquary: Reliquary;
        flat: Flat;
        weapon: Weapon;
    }

export interface FetterInfo {
        expLevel: number;
    }

export interface ProudSkillExtraLevelMap {
    [x:number]:number

    }

export interface AvatarInfoList {
        avatarId: number;
        propMap: PropMap;
        talentIdList: number[];
        fightPropMap: FightPropMap;
        skillDepotId: number;
        inherentProudSkillList: number[];
        skillLevelMap: SkillLevelMap;
        equipList: EquipList[];
        fetterInfo: FetterInfo;
        proudSkillExtraLevelMap: ProudSkillExtraLevelMap;
        costumeId?: number;
    }

export interface RootObject {
        playerInfo: PlayerInfo;
        avatarInfoList: AvatarInfoList[];
        ttl: number;
        uid: string;
    }
