import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { Notification as RawNotification } from '@prisma/client';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(notificationRaw: RawNotification): Notification {
    return new Notification(
      {
        category: notificationRaw.category,
        content: new Content(notificationRaw.content),
        recipientId: notificationRaw.recipientId,
        readAt: notificationRaw.readAt,
        createdAt: notificationRaw.createdAt,
      },
      notificationRaw.id,
    );
  }
}
