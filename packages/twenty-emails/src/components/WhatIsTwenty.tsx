import { type I18n } from '@lingui/core';
import { MainText } from 'src/components/MainText';
import { SubTitle } from 'src/components/SubTitle';

type WhatIsTwentyProps = {
  i18n: I18n;
};

export const WhatIsTwenty = ({ i18n }: WhatIsTwentyProps) => {
  return (
    <>
      <SubTitle value={i18n._('What is Dejoiy?')} />
      <MainText>
        {i18n._(
          "Dejoiy is a CRM platform that helps your team manage customer data and relationships in one place.",
        )}
      </MainText>
    </>
  );
};
