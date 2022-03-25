## Amplify-CLI 설치와 설정

Amplify CLI를 로컬에 글로벌하게 설치한다.

```
~$ npm install -g @aws-amplify/cli
```

CLI 설치가 되면 AWS 계정의 IAM 사용자를 이용하여 CLI에게 사용자 권한을 위임해야 한다.
이 때, 사용자 자격 증명 집합 (access key, secret access key)를 참조할 수 있도록 한다.

```
~$ amplify configure
```

명령어 실행 시 다음 단계를 진행하게 된다. 가장 가까운 지역 혹은 선호하는 지역을 선택한다. 유저 이름의 경우 AWS 계정에서 생성할 사용자의 이름이 된다. amplify-cli-${username} 과 같이 식별가능한 이름을 추천한다.

1. Specific the AWS region
2. Specific the username

이후 대시보드가 열리면, 페이지를 열고 사용자 생성을 진행한다. 기본값으로 선택되어 있는 설정으로 진행해도 문제없으며, [Permissions], [Tags], [Review] 단계를 거쳐 [Create user]를 클릭하여 IAM 사용자 생성을 완료한다.

완료되면, access key ID, secret access key의 값을 복사하여 CLI에 값을 붙여 넣는다.
