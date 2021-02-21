export class Role {
    id: string;
    name: string;
    claims: Claim[];
}

export class Claim {
    roleId: string;
    id: string;
    claimValue: string;
    claimType: string;
}