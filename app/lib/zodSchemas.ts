import { conformZodMessage } from '@conform-to/zod';
import { z } from 'zod';

export const onboardingSchema = z.object({
  fullname: z.string().min(3).max(150),
  userName: z
    .string()
    .min(3)
    .max(150)
    .regex(/^[a-zA-Z0-9-]+$/, {
      message: 'Solo se admiten letras, números y guiones'
    }),
})

export function onboardingSchemaValidation(options?: {
  isUsernameUnique: () => Promise<boolean>
}) {
  return z.object({
    userName: z
      .string()
      .min(3)
      .max(150)
      .regex(/^[a-zA-Z0-9-]+$/, {
        message: 'Solo se admiten letras, números y guiones'
      })
      .pipe(
        z.string().superRefine((_, ctx) => {
          if (typeof options?.isUsernameUnique !== 'function') {
            ctx.addIssue({
              code: 'custom',
              message: conformZodMessage.VALIDATION_UNDEFINED,
              fatal: true,
            })
            return
          }
          return options.isUsernameUnique().then((isUnique) => {
            if (!isUnique) {
              ctx.addIssue({
                code: 'custom',
                message: 'El nombre de usuario ya existe',
                fatal: true,
              })
            }
          })
        })
      ),
    fullname: z.string().min(3).max(150),
  })
}

export const settingsSchema = z.object({
  fullName: z.string().min(3).max(150),
  profileImage: z.string(),
})

export const eventsTYpeSchema = z.object({
  title: z.string().min(3).max(150),
  duration: z.number().min(30).max(120),
  url: z.string().min(3).max(150),
  description: z.string().min(3).max(300),
  videoCallSoftware: z.string().min(3),
})