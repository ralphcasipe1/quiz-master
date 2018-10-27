import paginate from '../../../helpers/paginate'

describe('Helper `paginate()`', () => {
  const numbers = [1, 2, 3]
  
  it('should return one item', () => {
    const paginateTestOne = paginate(numbers, 1, 3)
    const paginateTestTwo = paginate(numbers, 2, 2)

    expect(paginateTestOne.length).toBe(1)
    expect(paginateTestOne).toEqual([3])
    expect(paginateTestTwo.length).toBe(1)
    expect(paginateTestTwo).toEqual([3])
  })

  it('should return two item', () => {
    const paginateTestOne = paginate(numbers, 2, 1)
    
    expect(paginateTestOne.length).toBe(2)
    expect(paginateTestOne).toEqual([1, 2])
  })
})