# tsc-class-validator

[class-validator](https://github.com/typestack/class-validator) `@ValidateNested()` issue with entities from local installed package.

## Steps to reproduce
1. `cd tsc-package && npm i`
2. `npm build`
3. `cd tsc-app && npm i`
4. `npm start`

## Entity
```typescript
export class ParentDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ChildDto)
  children: ChildDto[]
}

export class ChildDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  age: string
}
```

## raw
```typescript
const raw = {
  name: 'parent name',
  children: [
    {}
  ]
}
```

## Output
```typescript
local errors
[
  {
    "target": {
      "name": "parent name",
      "children": [
        {}
      ]
    },
    "value": [
      {}
    ],
    "property": "children",
    "children": [
      {
        "target": [
          {}
        ],
        "value": {},
        "property": "0",
        "children": [
          {
            "target": {},
            "property": "name",
            "children": [],
            "constraints": {
              "isNotEmpty": "name should not be empty",
              "isString": "name must be a string"
            }
          },
          {
            "target": {},
            "property": "age",
            "children": [],
            "constraints": {
              "isNotEmpty": "age should not be empty",
              "isString": "age must be a string"
            }
          }
        ]
      }
    ]
  }
]
package errors
[]
```

## Expected output
```typescript
local errors
[
  {
    "target": {
      "name": "parent name",
      "children": [
        {}
      ]
    },
    "value": [
      {}
    ],
    "property": "children",
    "children": [
      {
        "target": [
          {}
        ],
        "value": {},
        "property": "0",
        "children": [
          {
            "target": {},
            "property": "name",
            "children": [],
            "constraints": {
              "isNotEmpty": "name should not be empty",
              "isString": "name must be a string"
            }
          },
          {
            "target": {},
            "property": "age",
            "children": [],
            "constraints": {
              "isNotEmpty": "age should not be empty",
              "isString": "age must be a string"
            }
          }
        ]
      }
    ]
  }
]
package errors
[
  {
    "target": {
      "name": "parent name",
      "children": [
        {}
      ]
    },
    "value": [
      {}
    ],
    "property": "children",
    "children": [
      {
        "target": [
          {}
        ],
        "value": {},
        "property": "0",
        "children": [
          {
            "target": {},
            "property": "name",
            "children": [],
            "constraints": {
              "isNotEmpty": "name should not be empty",
              "isString": "name must be a string"
            }
          },
          {
            "target": {},
            "property": "age",
            "children": [],
            "constraints": {
              "isNotEmpty": "age should not be empty",
              "isString": "age must be a string"
            }
          }
        ]
      }
    ]
  }
]
```