

export interface WidgetStateData {
    isActive: boolean,
    isValid: boolean,
    isDirty: boolean,
    isBusy: boolean,
    isAttached: boolean,
    wasActivated: boolean
}

export interface WidgetState extends WidgetStateData
{ key : string,  }
