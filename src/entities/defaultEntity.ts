export interface DefaultInterface
{

};

export class Default
{
    // 
    private _defaultProp: number;

    constructor()
    {
        this._defaultProp = 0;
    }
    // Setter example
    public setDefault(val: number): void
    {
        // Always put validations and errors handlers first in the block
        if (typeof(val) !== 'number')
            throw new Error('TYPE_ERROR');
        
        this._defaultProp = val;
    }
    // Getter example
    public getDefault = (): number => this._defaultProp;
};