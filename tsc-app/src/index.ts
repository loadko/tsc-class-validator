import 'reflect-metadata'
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'
import { LocalParentDto } from './entity'
import { ParentDto } from 'tsc-package/dist'

(async () => {
  const raw = {
    name: 'parent name',
    children: [
      {}
    ]
  }
  
  const localObject = plainToClass(LocalParentDto, raw)
  const localErrors = await validate(localObject)

  console.log('local errors')
  console.log(JSON.stringify(localErrors, null, 2))  
  
  const object = plainToClass(ParentDto, raw)
  const errors = await validate(object)

  console.log('package errors')
  console.log(JSON.stringify(errors, null, 2))
})()
