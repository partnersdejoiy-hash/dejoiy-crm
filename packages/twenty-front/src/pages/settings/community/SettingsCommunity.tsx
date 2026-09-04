import { SettingsCard } from '@/settings/components/SettingsCard';
import { SettingsPageContainer } from '@/settings/components/SettingsPageContainer';
import { SettingsPageLayout } from '@/settings/components/layout/SettingsPageLayout';
import { styled } from '@linaria/react';
import { t } from '@lingui/core/macro';
import {
  IconMail,
  IconWorld,
  type IconComponent,
} from 'twenty-ui/icon';
import { H2Title } from 'twenty-ui/typography';
import { Section } from 'twenty-ui/layout';
import { SettingsPath } from 'twenty-shared/types';
import { getSettingsPath } from 'twenty-shared/utils';
import { themeCssVariables } from 'twenty-ui/theme-constants';

const StyledCardLink = styled.a`
  display: block;
  min-width: 0;
  text-decoration: none;
`;

const StyledCardsGrid = styled.div`
  display: grid;
  gap: ${themeCssVariables.spacing[2]};
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;

type SettingsCommunityLink = {
  href: string;
  Icon: IconComponent;
  iconColor: string;
  cardTitle: string;
};

export const SettingsCommunity = () => {
  const socialLinks: SettingsCommunityLink[] = [
    {
      href: 'https://dejoiy.com',
      Icon: IconWorld,
      iconColor: themeCssVariables.color.blue4,
      cardTitle: t`Visit dejoiy.com`,
    },
    {
      href: 'mailto:support@dejoiy.com',
      Icon: IconMail,
      iconColor: themeCssVariables.color.pink,
      cardTitle: t`Email support`,
    },
  ];

  return (
    <SettingsPageLayout
      title={t`Community`}
      links={[
        {
          children: t`Other`,
          href: getSettingsPath(SettingsPath.Community),
        },
        { children: t`Community` },
      ]}
    >
      <SettingsPageContainer>
        <Section>
          <H2Title
            title={t`Stay in touch`}
            description={t`Product news, help and support for your Dejoiy workspace.`}
          />
          <StyledCardsGrid>
            {socialLinks.map(({ href, Icon, iconColor, cardTitle }) => (
              <StyledCardLink
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SettingsCard
                  Icon={
                    <Icon
                      size={themeCssVariables.icon.size.md}
                      stroke={themeCssVariables.icon.stroke.sm}
                    />
                  }
                  iconColor={iconColor}
                  title={cardTitle}
                />
              </StyledCardLink>
            ))}
          </StyledCardsGrid>
        </Section>
      </SettingsPageContainer>
    </SettingsPageLayout>
  );
};
