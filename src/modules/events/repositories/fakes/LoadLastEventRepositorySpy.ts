import ILoadLastEventRepository from '../ILoadLastEventRepository'


export default class LoadLastEventRepositorySpy implements ILoadLastEventRepository{
    groupId?: string
    callsCount = 0
    output?: {
        endDate: Date,
        reviewDurationInHours: number
    }

    async loadLastEvent({ groupId } : { groupId: string }): Promise<{endDate: Date, reviewDurationInHours: number} |undefined>{
        this.groupId = groupId
        this.callsCount++
        return this.output
    }
}
